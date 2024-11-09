import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css"; // if you copy ala shadcn, no need import css.
// import aws from '/icons/aws.svg'
function Skills({ direction }) {
  return (
    <div className="md:px-40">
      <Marquee
        className="gap-[3rem] [--duration:20s]"
        innerClassName="gap-[3rem] [--gap:3rem]"
        fade={true}
        pauseOnHover={true}
        direction={direction}
      >
        <div>
          <img className="w-16 h-w-16 " src="/icons/docker.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/discord.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/dev.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/]c.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/cpp.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/javascript.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/blockchain.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/aws.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/css.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/django.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/drive.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/framer-motion.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/git.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/graphql.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/fram.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/framer.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/github.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/hashnode.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/html.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/java.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/linkedin.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/mongodb.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/mysql.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/nodejs.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/postgresql.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/postman.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/prisma.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/reactjs.svg" alt="" />
        </div>
        <div>
          <img
            className="w-16 h-w-16 "
            src="/icons/react-router-color.svg"
            alt=""
          />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/tailwindcss.svg" alt="" />
        </div>
        <div>
          <img className="w-16 h-w-16 " src="/icons/typescript.svg" alt="" />
        </div>
      </Marquee>
    </div>
  );
}

export default Skills;
