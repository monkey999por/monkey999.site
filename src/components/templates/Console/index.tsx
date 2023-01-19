import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import styles from "./Console.module.scss";

export default function Console(): JSX.Element {
  console.log(`render component Console`);
  const router = useRouter();

  const [server, setServer] = useState("192.168.0.11");
  const [user, setUser] = useState("monkey999");
  const [commandHistory, setCommandHistory] = useState<
    {
      command: string;
      result: string;
    }[]
  >([{ command: "", result: "" }]);

  const inputElement = useRef<HTMLInputElement>(null);
  const logsElement = useRef<HTMLDivElement>(null);

  const commands: {
    name: string;
    func: (args: string) => string;
  }[] = [
    {
      // example : ssh 111.221.1.1@usert
      name: "ssh",
      // ssh mock
      func: (args: string) => {
        console.log(args);
        const sshFormat = /[0-9]{3}\.[0-9]{3}\.[0-9]{1,3}\.[0-9]{1,3}@.+/gi;
        if (!sshFormat.test(args)) {
          return `access rejected`;
        }

        setServer(args.split("@")[0]);
        setUser(args.split("@")[1]);

        return `login to ${args}`;
      },
    },
    // {
    //   name: "cls",
    //   func: () => {
    //     console.log("clear console");
    //     setCommandHistory([{ command: "", result: "" }]);
    //     return "cls done";
    //   },
    // },
    {
      name: "exit",
      func: () => {
        if (confirm("logout?")) {
          router.push("/");
        }
        return "exit done";
      },
    },
  ];

  let keyPressCount = 0;

  // 初期表示のフォーカス
  useEffect(() => {
    console.log("Effect");

    inputElement.current?.focus();

    // 一番下にスクロール
    const element = document.documentElement;
    const bottom = element.scrollHeight - element.clientHeight;
    window.scroll(0, bottom);
  }, [commandHistory]);

  const handleInputKeyDown = (e: any): void => {
    // 上押下
    console.log(e.key);

    if (e.key === "ArrowUp") {
      if (commandHistory) {
        if (commandHistory.length >= keyPressCount + 1) {
          keyPressCount++;
        }

        const temp =
          commandHistory[commandHistory.length - keyPressCount]?.command;
        if (inputElement.current) {
          inputElement.current.value = temp ? temp : "";
        }
      }
    } else if (e.key === "ArrowDown") {
      // 下押下
      if (
        commandHistory.length >= keyPressCount - 1 &&
        commandHistory.length <= keyPressCount - 1
      ) {
        keyPressCount--;
      }
      console.log(commandHistory.length - keyPressCount);
      const temp =
        commandHistory[commandHistory.length - keyPressCount]?.command;
      if (inputElement.current) {
        inputElement.current.value = temp ? temp : "";
      }
    }

    // Enter押下時
    if (e.key === "Enter") {
      keyPressCount = 0;
      if (inputElement.current) {
        runCommand(inputElement.current.value);
      }

      if (inputElement.current) {
        inputElement.current.value = "";
      }
    }
  };

  /**
   * コマンドを実行して結果を表示
   *
   * @param commandFunc 実行するコマンド
   * @param args コマンドの引数
   */
  const runCommand = (inputInfo: string) => {
    // コマンド実行
    const [inputCommandName, args] = inputInfo.split(/(?<=^[^\s]+)\s/);

    const command = commands.filter(
      (command) => inputCommandName === command.name
    );

    // 上ボタン、下ボタンで使う。
    setCommandHistory([
      ...commandHistory,
      {
        command: inputInfo,
        result: command[0]
          ? command[0]?.func(args)
          : (() => {
              try {
                eval(inputInfo);
              } catch (e) {
                console.log(e);
                return "eval error";
              }
              return "run eval";
            })(),
      },
    ]);
    console.log(commandHistory);
  };

  return (
    <>
      <div
        className={styles.container}
        onClick={() => inputElement.current?.focus()}
      >
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>user console</title>
        </Head>
        <main className={styles.console}>
          <div ref={logsElement} className={styles.logs}>
            <p className={styles.hash}>
              login to {server}@{user}
            </p>
            {commandHistory.map((item) => (
              <>
                <div className={styles.histories}>
                  <p>
                    {user}@{server}$ {item.command}
                  </p>
                  <p>{item.result}</p>
                </div>
              </>
            ))}
          </div>

          <div className={styles.input}>
            <span className={styles.user}>{user}</span>@
            <span className={styles.server}>{server}</span>$&nbsp;
            <input
              ref={inputElement}
              onKeyDown={(e) => {
                handleInputKeyDown(e);
              }}
              onBlur={() => {
                inputElement.current?.focus();
              }}
              type='text'
              name='command'
              className={styles.command}
            />
          </div>
        </main>
      </div>
    </>
  );
}
