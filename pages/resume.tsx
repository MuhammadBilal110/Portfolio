import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            Bachloers in Computer Science
            </h5>
            <p className="font-semibold">PAF-KIET (2018-2022)</p>
            <h5 className="my-2 text-xl font-bold">
            Certification in Artificial intelligence
            </h5>
            <p className="font-semibold">PIAIC (2019-2022)</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Engineer.</h5>
            <p className="font-semibold">Avanza Innovation</p>
           
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Backend Engineer.</h5>
            <p className="font-semibold">Queno</p>
           
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Full Stack Developer.</h5>
            <p className="font-semibold">Coderatory</p>
           
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
