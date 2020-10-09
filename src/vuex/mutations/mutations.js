export default {
    TRIM_STRING_TO_LIMIT(ctx, str) {
        if (str.length <= this.state.letter_limit) {
            this.state.trimmed_string = str;
            return;
        }
        for (let i = this.state.letter_limit; i < str.length; i++) {
            // Даем слову в строке закончиться, обрезаем строку, заканчиваем цикл
            if (str[i] == " ") {
                this.state.trimmed_string = str.substr(0, i + 1);
                break;
            }
            // Обрезаем принудительно, заканчиваем цикл
            else if (i > this.state.letter_limit + 30) {
                this.state.trimmed_string = str.substr(0, i) + " ";
                break;
            }
        }
    },
}