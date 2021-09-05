
import ZH from "../assets/script/zh";
import EN from "../assets/script/en";

export const GET_LOCALE = () => {

    const local = localStorage.getItem("current_lang") || "en"

    return local === 'zh' ? ZH : EN

}
