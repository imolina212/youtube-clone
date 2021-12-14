import React from "react";
import "../About.css";
import Molina from "../Molina.png";
import Justin from "../Justin.jpeg";
import Kisha2 from "../Kisha2.jpg";
import tashawnee from "../tashawnee.jpg";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1 className="headings">Our Project</h1>
        <p className="bio">
          The fantastic four Dream Team joined forces to build this web app that
          responsively changes based on what YouTube video interests the user.
          The project accesses and external API that the team integrated into
          the app - allowing for users to search for, view, and leave comments
          on videos. Enjoy!
        </p>
        <h1 className="headings" className="title">
          Meet The Dream Team
        </h1>
        <h2> Isidro Molina</h2>
        <div>
          <img
            src={Molina}
            alt="Photo of Isidro and his family parrot, named Drako"
          />
        </div>
        <a href={"https://github.com/imolina212"}>Check Him Out On Github!</a>
        <p className="bio">
          Constantly challenging himself - Isidro is passionate about seeking
          ways to advance his skills as a software developer. He stays on top of
          living a healthy lifestyle. In his time away from learning new coding
          languages, he likes to go hiking and can also be spotted relaxing with
          his family parrot, Drako! Current Favorite Youtube
          Channel:laoshu505000. “If you talk to a man in a language he
          understands, it goes to his head. If you talk to him in his language,
          that goes to his heart.” -Nelson Mandela
        </p>
        <h2>Kisha J</h2>
        <div>
          <img src={Kisha2} alt="Kisha J, Spruce and Fur, Kisha J's kitties" />
        </div>
        <a href="https://github.com/https://github.com/lakishaJohnson">
          More On Kisha J!
        </a>
        <p className="bio">
          An expert plantswoman, cat mom and software developer Kisha J is a
          triple threat who does not back-down from a challenge! Some of her
          favorite aspects of application projects have been adding final
          details that takes the user interface to the next level or anything
          that will elevate a project from good to great. Fav Youtube Channel:
          Pickle Rick
        </p>

        <h2> Justin Daniel Diaz</h2>
        <div>
          <img
            src={Justin}
            alt="Photo of Justin celebrating his birthday with chocolate cake wearing a sombrero "
          />
        </div>
        <a href="https://github.com/JustDDiaz">His Latest Projects! </a>
        <p className="bio">
          Justin does a canon ball dive into coding challenges, and in his spare
          time he enjoys video games - his favorite to play right now is Halo
          Infinite! Another animal lover he eventually hopes to write code for a
          company that is aligned with his vision for projects in the gaming
          industry. Fav Channel: Jesse's Barbershop
        </p>
        <h2>Tashawnee G</h2>
        <div>
          <img src={tashawnee} alt="Check out her work so far!" />
        </div>
        <a href="https://github.com/tashawneeguarriello">
          What she's been up to on Github!
        </a>
        <p className="bio">
          Aspiring to have a career that will allow her to teach others,
          Tashawnee G is aiming to learn as much as possible to educate the
          minds of the future. She enjoys getting to know people better and in
          her spare time she binges singing and cook competition shows. Favorite
          Youtube Channel: Ellen and The Tonight Show!
        </p>
      </div>
    );
  }
}

export default About;
