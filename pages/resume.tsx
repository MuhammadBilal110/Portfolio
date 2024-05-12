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
            Bachelor of Commerce
            </h5>
            <p className="font-semibold">Karachi University (In Progress) (2020-204)</p>
            <h5 className="my-2 text-xl font-bold">
            ADVANCE DIPLOMA IN MEDIA STUDIES
            </h5>
            <p className="font-semibold">ADMS (2019-2022)</p>
          </div>
        </div>
        <div>

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

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
     
      <h5 className="my-3 text-2xl font-bold">Experience</h5>
      <div className="">
        <h5 className="my-2 text-xl font-bold">UI/UX Designer and 3D Artist.</h5>
        <p className="font-semibold">Avanza Innovation</p>
       
      </div>
      <div className="">
        <h5 className="my-2 text-xl font-bold">Graphic Designer.</h5>
        <p className="font-semibold"> IBEX Global</p>
       
      </div>
      <div className="">
        <h5 className="my-2 text-xl font-bold">Media Manager.</h5>
        <p className="font-semibold">Cherry House of Fashion</p>
       
      </div>
      <div className="">
        <h5 className="my-2 text-xl font-bold">Project Coordinator.</h5>
        <p className="font-semibold">Vital Tech Intl (Samsung/ Dahua CCTV)</p>
       
      </div>
      <div className="">
        <h5 className="my-2 text-xl font-bold">Mubarak Caterers and Decorators.</h5>
        <p className="font-semibold">Project Coordinator</p>
       
      </div>
      <div className="">
        <h5 className="my-2 text-xl font-bold">DGR (Distinguish Gentlemen Ride).</h5>
        <p className="font-semibold">Photographer</p>
       
      </div>
      <div className="">
        <h5 className="my-2 text-xl font-bold">Ride Pakistan.</h5>
        <p className="font-semibold">Photographer</p>
       
      </div>
      </div>
    </div>
  );
};

export default Resume;
