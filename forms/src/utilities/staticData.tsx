import ASPS_Case_based_Discussion_Form from '../../assets/form_jsons/ASPS_Case_based_Discussion_Form.json';
import ASPS_Clinical_Feedback_Form from '../../assets/form_jsons/ASPS_Clinical_Feedback_Form.json';
import ASPS_End_of_Term_Professional_Performance_Assessment from '../../assets/form_jsons/ASPS_End_of_Term_Professional_Performance_Assessment.json';
import ASPS_Mid_term_Professional_Performance_Assessment from '../../assets/form_jsons/ASPS_Mid_term_Professional_Performance_Assessment.json';
import ASPS_Operative_Feedback_Form from '../../assets/form_jsons/ASPS_Operative_Feedback_Form.json';
import ASPS_Presentation_Evaluation_Form from '../../assets/form_jsons/ASPS_Presentation_Evaluation_Form.json';
import ASPS_Trainee_Evaluation_of_a_Training_Post from '../../assets/form_jsons/ASPS_Trainee_Evaluation_of_a_Training_Post.json';
import Cardio_DOPS_Aortic_Valve_Replacement from '../../assets/form_jsons/Cardio_DOPS_Aortic_Valve_Replacement.json';
import Cardio_DOPS_Coronary_Artery_Bypass_Grafting from '../../assets/form_jsons/Cardio_DOPS_Coronary_Artery_Bypass_Grafting.json';
import Cardio_DOPS_Dissection_of_Internal_Mammary_Artery from '../../assets/form_jsons/Cardio_DOPS_Dissection_of_Internal_Mammary_Artery.json';
import Cardio_DOPS_Harvesting_of_Radial_Artery from '../../assets/form_jsons/Cardio_DOPS_Harvesting_of_Radial_Artery.json';
import Cardio_DOPS_Median_Sternotomy from '../../assets/form_jsons/Cardio_DOPS_Median_Sternotomy.json';
import Cardio_DOPS_Mitral_Valve_Surgery from '../../assets/form_jsons/Cardio_DOPS_Mitral_Valve_Surgery.json';
import Cardio_DOPS_Resternotomy from '../../assets/form_jsons/Cardio_DOPS_Resternotomy.json';
import Cardio_DOPS_Saphenous_Vein_Harvest from '../../assets/form_jsons/Cardio_DOPS_Saphenous_Vein_Harvest.json';
import Cardio_DOPS_Thoracotomy from '../../assets/form_jsons/Cardio_DOPS_Thoracotomy.json';
import Cardio_Longitudinal_Requirements_Form from '../../assets/form_jsons/Cardio_Longitudinal_Requirements_Form.json';
import Cardio_SET_1_Rotational_feedback_form from '../../assets/form_jsons/Cardio_SET_1_Rotational_feedback_form.json';
import Cardio_SET_1_Self_Assessment_form from '../../assets/form_jsons/Cardio_SET_1_Self_Assessment_form.json';
import Cardio_Trainee_Evaluation_Form from '../../assets/form_jsons/Cardio_Trainee_Evaluation_Form.json';
import Paeds_CATS_marking_rubric from '../../assets/form_jsons/Paeds_CATS_marking_rubric.json';
import Paeds_Early_SET_Trainee_Assessment from '../../assets/form_jsons/Paeds_Early_SET_Trainee_Assessment.json';
import Paeds_End_of_Mid_SET_Trainee_Assessment from '../../assets/form_jsons/Paeds_End_of_Mid_SET_Trainee_Assessment.json';
import Paeds_End_of_Senior_SET_Trainee_Assessment from '../../assets/form_jsons/Paeds_End_of_Senior_SET_Trainee_Assessment.json';
import Paeds_Mid_SET_Trainee_Assessment from '../../assets/form_jsons/Paeds_Mid_SET_Trainee_Assessment.json';
import Paeds_MiniCEX from '../../assets/form_jsons/Paeds_MiniCEX.json';
import PAEDS_MOUSE from '../../assets/form_jsons/PAEDS_MOUSE.json';
import Paeds_Senior_SET_Trainee_Assessment from '../../assets/form_jsons/Paeds_Senior_SET_Trainee_Assessment.json';
import SIMG_Paeds_MiniCEX from '../../assets/form_jsons/SIMG_Paeds_MiniCEX.json';
import SIMG_Paeds_MOUSE from '../../assets/form_jsons/SIMG_Paeds_MOUSE.json';
import Vascular_Case_Based_Discussion from '../../assets/form_jsons/Vascular_Case_Based_Discussion.json';
import Vascular_Consultation_Observation from '../../assets/form_jsons/Vascular_Consultation_Observation.json';
import Vascular_DOPS from '../../assets/form_jsons/Vascular_DOPS.json';
import Vascular_Endovascular_Procedure_Observation from '../../assets/form_jsons/Vascular_Endovascular_Procedure_Observation.json';
import Vascular_In_Training_Assessment_Form from '../../assets/form_jsons/Vascular_In_Training_Assessment_Form.json';
import Vascular_MiniCEX from '../../assets/form_jsons/Vascular_Mini_CEX.json';
import Vascular_Open_Surgery_Observation from '../../assets/form_jsons/Vascular_Open_Surgery_Observation.json';
import Vascular_Trainee_Post_Evaluation from '../../assets/form_jsons/Vascular_Trainee_Post_Evaluation.json';
import Vascular_Ultrasound_Observation from '../../assets/form_jsons/Vascular_Ultrasound_Observation.json';




export const specialties: {}[] = [
    {
        shortName: "ASPS",
        longName: "ASPS - Plastic and Reconstructive Surgery Australia"
    },
    {
        shortName: "CARDIO",
        longName: "Cardiothoracic Surgery"
    },
    {
        shortName: "PAEDS",
        longName: "Paediatric Surgery"
    }
    , {
        shortName: "SIMG",
        longName: "SIMG"
    },
    {
        shortName: "VASC",
        longName: "Vascular Surgery"
    }
];

export const aspsForms: {}[] = [
    { name: 'ASPS_Case_based_Discussion_Form', data: ASPS_Case_based_Discussion_Form },
    { name: 'ASPS_Clinical_Feedback_Form', data: ASPS_Clinical_Feedback_Form },
    { name: 'ASPS_End_of_Term_Professional_Performance_Assessment', data: ASPS_End_of_Term_Professional_Performance_Assessment },
    { name: 'ASPS_Mid_term_Professional_Performance_Assessment', data: ASPS_Mid_term_Professional_Performance_Assessment },
    { name: 'ASPS_Operative_Feedback_Form', data: ASPS_Operative_Feedback_Form },
    { name: 'ASPS_Presentation_Evaluation_Form', data: ASPS_Presentation_Evaluation_Form },
    { name: 'ASPS_Trainee_Evaluation_of_a_Training_Post', data: ASPS_Trainee_Evaluation_of_a_Training_Post }
];

export const cardioForms: {}[] = [
    { name: 'Cardio_DOPS_Aortic_Valve_Replacement', data: Cardio_DOPS_Aortic_Valve_Replacement },
    { name: 'Cardio_DOPS_Coronary_Artery_Bypass_Grafting', data: Cardio_DOPS_Coronary_Artery_Bypass_Grafting },
    { name: 'Cardio_DOPS_Dissection_of_Internal_Mammary_Artery', data: Cardio_DOPS_Dissection_of_Internal_Mammary_Artery },
    { name: 'Cardio_DOPS_Harvesting_of_Radial_Artery', data: Cardio_DOPS_Harvesting_of_Radial_Artery },
    { name: 'Cardio_DOPS_Median_Sternotomy', data: Cardio_DOPS_Median_Sternotomy },
    { name: 'Cardio_DOPS_Mitral_Valve_Surgery', data: Cardio_DOPS_Mitral_Valve_Surgery },
    { name: 'Cardio_DOPS_Resternotomy', data: Cardio_DOPS_Resternotomy },
    { name: 'Cardio_DOPS_Saphenous_Vein_Harvest', data: Cardio_DOPS_Saphenous_Vein_Harvest },
    { name: 'Cardio_DOPS_Thoracotomy', data: Cardio_DOPS_Thoracotomy },
    { name: 'Cardio_Longitudinal_Requirements_Form', data: Cardio_Longitudinal_Requirements_Form },
    { name: 'Cardio_SET_1_Rotational_feedback_form', data: Cardio_SET_1_Rotational_feedback_form },
    { name: 'Cardio_SET_1_Self_Assessment_form', data: Cardio_SET_1_Self_Assessment_form },
    { name: 'Cardio_Trainee_Evaluation_Form', data: Cardio_Trainee_Evaluation_Form }
];

export const paedsForms: {}[] = [
    { name: 'Paeds_CATS_marking_rubric', data: Paeds_CATS_marking_rubric },
    { name: 'Paeds_Early_SET_Trainee_Assessment', data: Paeds_Early_SET_Trainee_Assessment },
    { name: 'Paeds_End_of_Mid_SET_Trainee_Assessment', data: Paeds_End_of_Mid_SET_Trainee_Assessment },
    { name: 'Paeds_End_of_Senior_SET_Trainee_Assessment', data: Paeds_End_of_Senior_SET_Trainee_Assessment },
    { name: 'Paeds_Mid_SET_Trainee_Assessment', data: Paeds_Mid_SET_Trainee_Assessment },
    { name: 'Paeds_MiniCEX', data: Paeds_MiniCEX },
    { name: 'PAEDS_MOUSE', data: PAEDS_MOUSE },
    { name: 'Paeds_Senior_SET_Trainee_Assessment', data: Paeds_Senior_SET_Trainee_Assessment }

];

export const simgForms: {}[] = [
    { name: 'SIMG_Paeds_MiniCEX', data: SIMG_Paeds_MiniCEX },
    { name: 'SIMG_Paeds_MOUSE', data: SIMG_Paeds_MOUSE }

];

export const vascularForms: {}[] = [

    { name: 'Vascular_Case_Based_Discussion', data: Vascular_Case_Based_Discussion },
    { name: 'Vascular_Consultation_Observation', data: Vascular_Consultation_Observation },
    { name: 'Vascular_DOPS', data: Vascular_DOPS },
    { name: 'Vascular_Endovascular_Procedure_Observation', data: Vascular_Endovascular_Procedure_Observation },
    { name: 'Vascular_In_Training_Assessment_Form', data: Vascular_In_Training_Assessment_Form },
    { name: 'Vascular_Mini_CEX', data: Vascular_MiniCEX },
    { name: 'Vascular_Open_Surgery_Observation', data: Vascular_Open_Surgery_Observation },
    { name: 'Vascular_Trainee_Post_Evaluation', data: Vascular_Trainee_Post_Evaluation },
    { name: 'Vascular_Ultrasound_Observation', data: Vascular_Ultrasound_Observation }

];







