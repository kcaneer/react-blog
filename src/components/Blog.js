import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

function Blog() {
  return (
    <div className="container pb-5 pt-5" id="blog">
      <div className="row pb-5 pt-5">
        <h1>Blog</h1>
      </div>
      <div className="row mx-auto">
        <div className="col-12 mx-auto">
          <h4 id="prework">Prework Posts</h4>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-3 mx-left">
          <p>
            <FontAwesomeIcon icon={faGithubSquare} />{" "}
            <FontAwesomeIcon icon={faCode} />{" "}
            <FontAwesomeIcon icon={faCss3Alt} />{" "}
            <FontAwesomeIcon icon={faTerminal} />{" "}
          </p>
        </div>
        <div className="col-md-6 col-sm-12 mx-auto">
          <h2>4 Weeks of Remote Introductory work:</h2>
          <p>
            Wow! A lot of change. A lot of downloading. Not much coding...yet.
            Should be an exciting next few weeks but for now I am trying to just
            get my bearings understanding how all of the pieces fit together. I
            am spending most of my time trying to understand git and VS code as
            well as learning how to interact with my terminal. I am most excited
            to start learning more of the basics like HTML and CSS before moving
            on to Javascript. This week we learned the basics of HTML, CSS, and
            pseudocoding. Overall, it was pretty simple and I really enjoyed the
            creativity involved in the pseudocoding assignment. I chose to
            pseudocode a robot that interacts with your Alexa to allow you to
            order customized coffee right in your home without taking the time
            to hand craft a beverage. Now I really want to make it a reality as
            Starbucks has claimed too much of my discretionary income for the
            last 5 years! Right now my blog incorporates a beginner's level of
            HTML, CSS, and Javascript interaction. My only blocker this week was
            incorrect punctuation in my code which caused the entire project to
            fail. I've learned from this that I need to work a little bit slower
            because it look me longer to debug the issue than it would have to
            do it right the first time around. Overall, I am feeling much more
            competent (for now!) and really enjoying each new concept. So far
            the most helpful thing to me has been reading Eloquent Javascript.
            The author explains things in a way that makes it much easier to
            grasp than just staring at code. This week we dove head first into
            Javascript...and I'm back to feeling incompetent. I built a clock
            and a countdown timer. The functionality took so long that the
            styling is very basic. I am really enjoying having a better
            understanding of HTML and really understanding the basic structure
            of a webpage with links that take you somewhere. Creating this blog
            has been a great learning experience to understand how the pieces
            fit together.
          </p>
        </div>
        <div className="col-3 mx-right"></div>
      </div>
      <div className="row mx-auto">
        <div className="col-12 mx-auto">
          <h4 id="front">Front End Posts</h4>
          <p>
            {" "}
            <FontAwesomeIcon icon={faBootstrap} />{" "}
            <FontAwesomeIcon icon={faReact} />{" "}
            <FontAwesomeIcon icon={faCodeBranch} />{" "}
            <FontAwesomeIcon icon={faJsSquare} />{" "}
          </p>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-3 mx-left"></div>
        <div className="col-md-6 col-sm-12 mx-auto">
          <h2>Week 1:</h2>
          <p>
            This week my brain has been stretched further than I knew it could
            go. We learned a lot of Javascript, how to get it to play nice with
            the HTML, we fell in love with Bootstrap (goodbye, CSS - as much as
            possible!), and we completed two projects (
            <a href="https://kcaneer.github.io/campaign/">campaign page</a> and{" "}
            <a href="https://kcaneer.github.io/read-your-mind/">mindreader</a>
            ). The number one thing that held me back was comparing my progress
            to others who had previous experience coding. However, I found that
            once I jumped in and took the first step I was learning at an
            incredible speed. If I continue to learn this much every week of the
            bootcamp I can't even imagine where I'll end up. I would like to
            feel much more comfortable specifically with JSON but also generally
            with Javascript in the coming weeks. I am really enjoying learning
            Bootstrap and would like to continue learning how containers, rows,
            and columns interact. I have a good general understanding but
            frequently find myself frustrated at spacing and not sure where to
            look.
          </p>
          <h2>Week 2:</h2>
          <p>
            This week I got much more comfortable using Bootstrap and learning
            how to integrate those components into my blog. I also learned about
            asynchronous programming and connected to an API for the first time.
            Using my new knowledge I built a
            <a href="https://kcaneer.github.io/weather-app/"> Weather App</a>.
          </p>
          <h2>Week 3:</h2>
          <p>
            This week I faced my fears with Javascript... and Javascript won
            (MVC design delivered the biggest hit). <em>However</em> I learned a
            ton and have a game plan put together of topics that I need to
            tackle. I built a functional{" "}
            <a href="https://kcaneer.github.io/tictactoe/">Tic-Tac-Toe game</a>{" "}
            which I had a lot of fun coding. Now that we are about halfway done
            with Bootcamp I am beginning to brainstorm ideas for my final
            project. I am considering doing some sort of tool for financial
            wellness. I am thinking of including a budgeting tool, investing
            advice (such as "When should you start investing?" and "How do I
            start?"), and resources to point people in the direction of a
            healthier financial future.
          </p>
          <h2>Week 4:</h2>
          <p>
            Why do you see JavaScript Frameworks and Libraries useful or hard to
            use? What Frameworks or Libraries are you interested in learning
            more about? Find one emerging JavaScript tool that you would like to
            learn more about or use in your final project.
          </p>
          <h2>Week 5:</h2>
          <p>
            Why are CLIs scary? What have you learned about CLIs? Would you
            build a CLI? What would it do? List a some ideas that without a
            Framework, would take you a long time to code. How do you feel now
            (week 5) compared to when you started? What questions haven't you
            answered on your blog page yet (scroll up and answer them to catch
            up)?
          </p>
          <h2>Week 6:</h2>
          <p>
            What do you like about React? What are you struggling with the most
            about React? How has React caused you to rethink your existing
            projects? What is your biggest win this week? Halfway through!
            Compared to week three, what are three ideas you might want to do
            for your final project? Are they the same, or have they changed now
            that you understand more about the technology and your limitations?
            What do you think about hooks
          </p>
        </div>
        <div className="col-3 mx-right"></div>
      </div>
      <div className="row mx-auto">
        <div className="col-12">
          <h4 id="back">Back End Posts</h4>
          <p>
            <FontAwesomeIcon icon={faPhp} />{" "}
            <FontAwesomeIcon icon={faLaravel} />{" "}
          </p>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-md-6 col-sm-12 mx-auto">
          <h2>Week 7:</h2>
          <p>
            What have you learned about PHP and server side programming that you
            were not aware of prior to this week? What do you want to know more
            about PHP and server side programming? How has learning PHP been?
            What are some similarities and differences you can see with JS? What
            if you had started with PHP instead of JS? Are there any exercises
            you think would be improved if you refactored them to PHP from JS?
            Do you plan to? Find one library, framework, NPM package, and/or
            external web API you think you might want use for your final
            project.
          </p>
          <h2>Week 8:</h2>
          <p>
            What are your thoughts about how far you have come? How has your
            Digital Literacy, Computational Thinking, and Adoption of Coding
            Culture increased? How do you plan on continuing to grow those
            areas? What are you struggling with the most in the Tech Stack so
            far and why? What were your main takeaways from the career fair?
            After making it through the tech stack, where do you think your
            current gaps are?
          </p>
        </div>
      </div>

      <div className="row mx-auto">
        <div className="col-12 mx-auto">
          <h4 id="full">Full Stack Posts</h4>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-3 mx-left">
          <p>
            <FontAwesomeIcon icon={faCloud} />{" "}
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 mx-auto">
        <h2>Week 9:</h2>
        <p>
          What are your thoughts about Laravel and React? What is one thing that
          you love about React or Laravel that you used to hate / didn't
          understand how to use? Compared to weeks three and six, what are three
          ideas you might want to do for your final project? Are they the same,
          or have they changed now that you understand more about the technology
          and your limitations? What cool new features have you learned about
          from the languages and frameworks you already know that will improve
          your workflow / add slick features to your final project? How many
          jobs have you applied to? Look back on the old questions to see if any
          of them would be good to answer this week compared to week one.
        </p>
        <h2>Week 10:</h2>
        <p>
          What are your thoughts about the Final Project? What do you think you
          will struggle with in completing the Final Project? Where will you
          excel? What are your opinions on the Agile Methodology? Do you think
          it takes up time? Do you think large scale projects can be completed
          without it?
        </p>
        <h2>Week 11:</h2>
        <p>
          How have you progressed and struggled during the time while building
          your Final Project? When was the last time your pseudo coded? What has
          changed in your method from then to now?
        </p>
        <h2>Week 12:</h2>
        <p className="mb-5">
          How have you progressed and struggled during the time while building
          your Final Project? When was the last time your pseudo coded? What has
          changed in your method from then to now?
        </p>
      </div>
    </div>
  );
}
export default Blog;
