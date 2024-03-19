const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="about-page">
        <h4 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          About This Website
        </h4>
        <p>
          Welcome to our immersive tool suite designed for the Ghost Recon
          Breakpoint community. This website is dedicated to enhancing your
          gameplay experience, whether you're into military simulation,
          role-playing, or simply seeking a deeper dive into the game's
          possibilities.
        </p>

        <h2 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Inspiration
        </h2>
        <p>
          The seed for this project was planted by RJGP, a creative force within
          the Breakpoint community. RJGP's original Mission Generator and
          innovative use of ChatGPT for generating dynamic mission briefings
          inspired me to expand on this foundation. By incorporating additional
          features and tools, we aim to complement RJGP's vision and provide the
          community with a more enriched gaming experience.
        </p>

        <h2 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Features
        </h2>
        <h3 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          RJGP's Mission Generator
        </h3>
        <ul>
          <li>
            1. First Select a Province: Choose your desired operational area
            from a list of provinces.
          </li>
          <li>
            2.Number of Locations: Decide how many spots you want to include in
            your mission.
          </li>
          <li>
            3. Generate: With one click, create a custom mission tailored to
            your selections.
          </li>
          <li>
            4. Copy ChatGPT Prompt: Grab a specially crafted prompt to generate
            a unique operation briefing in ChatGPT.
          </li>
          <li>
            5. Mission Briefing: ChatGPT will deliver a mission based on your
            chosen province and locations, complete with biome details, mission
            types, and suggested gear.
          </li>
          <li>
            6. Interactive Map: A generated map marks your operation areas,
            offering detailed descriptions with a simple click.
          </li>
        </ul>
        <h2 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Enhanced Realism
        </h2>
        <h4 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Fuel and Electric Calculators
        </h4>
        <li>
          Estimate vehicle fuel consumption for all Breakpoint vehicles,
          enhancing strategic planning for your operations.
        </li>
        <h4 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Weight Calculator
        </h4>
        <li>
          Manage your operator's loadout weight, varying by mission type for
          added realism.
        </li>
        <h4 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Community Missions
        </h4>
        <li>
          Share and discover missions created by the community, fostering
          collaboration and new challenges.
        </li>

        <h3 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Creating and Sharing Missions
        </h3>
        <p>
          Our Community Missions feature allows you to craft and share your own
          Ghost Recon Breakpoint missions with fellow players. Here’s how to get
          started:
        </p>
        <ol>
          <li>
            1. Navigate to the Community Menu and select "Create" to begin
            crafting your mission.
          </li>
          <li>2. Select a Province to set the scene for your mission.</li>
          <li>
            3. Describe Your Mission with as much detail as you like, including
            suggested loadouts and backstories.
          </li>
          <li>
            4. Export Your Mission by hitting "Export", downloading a `.json`
            file with your mission details.
          </li>
          <li>
            5. Share Your Mission by posting it along with a brief description
            on our dedicated Reddit or Discord channel.
          </li>
        </ol>

        <h3 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Importing and Experiencing Missions
        </h3>
        <ol>
          <li>Download a Community Mission from a shared `.json` file.</li>
          <li>Import the Mission through the "Import" tab on our website.</li>
          <li>
            Explore the Mission Details that appear, and use the "Play" button
            for a text-to-speech narration.
          </li>
          <li>
            View the Mission Map to see the exact operation locations marked
            out.
          </li>
        </ol>

        <h2 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Collaboration and Feedback
        </h2>
        <p>
          This project thrives on community involvement. If you have ideas for
          enhancing this tool suite, your input is invaluable. Whether it's
          improving existing features or suggesting new ones, we encourage you
          to reach out.
        </p>

        <h2 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Acknowledgments
        </h2>
        <p>
          A heartfelt thank you to RJGP for the initial inspiration and to every
          member of the Ghost Recon Breakpoint community who contributes to
          making this game uniquely immersive. Your creativity and enthusiasm
          are the driving forces behind this project.
        </p>

        <h2 style={{ fontWeight: 'bold', backgroundColor: '#636e72' }}>
          Contact
        </h2>
        <p>
          Have feedback, questions, or suggestions? We'd love to hear from you.
          Connect with us via email to share your thoughts and ideas.
        </p>

        <p>
          Thank you for visiting, and here's to many more immersive operations
          in Ghost Recon Breakpoint!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
