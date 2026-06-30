import { ContactCard } from "../../Components/ContactCard";

export const Contact = () => (
  <div className="pa4 center mw8">
    <h1 className="f2 fw7 orange bb pb2 mb4">Contact</h1>
    <p className="lh-copy mb5 mw6">
      Have questions, feedback, or want to join a game? Reach out using the
      details below.
    </p>

    <div className="flex flex-wrap gap3">
      <div className="mr4 mb4">
        <ContactCard
          name="Plateau"
          role="Designer"
          discord="@Plateau"
          reddit="u/Bubbly_Procedure7989"
          notes="Primary point of contact for rules questions and expansion feedback."
        />
      </div>
    </div>
  </div>
);
