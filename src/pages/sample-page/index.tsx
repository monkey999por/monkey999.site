import SampleTemplates from "@templates/SampleTemplates";
import { testfunc } from "@utils/functions/sampleFunc";

type Props = {
  value: string;
  keys?: number[];
};

export default function samplePage() {
  testfunc();
  return (
    <>
      <SampleTemplates val='prop value asign template from page' />
    </>
  );
}
