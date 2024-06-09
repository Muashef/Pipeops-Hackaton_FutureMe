import React from "react";
import Questionnaire from "../components/Questionnaire/Questionnaire";
import { QuestionnaireProvider } from "../components/Questionnaire/QuestionnaireProvider/QuestionnaireProvider";

function QuestionnairePage() {
  return (
    <div>
      <QuestionnaireProvider>
        <Questionnaire />
      </QuestionnaireProvider>
    </div>
  );
}

export default QuestionnairePage;
