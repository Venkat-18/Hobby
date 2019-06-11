import React from 'reactn';
import { useGlobal } from 'reactn';
import Score_api from "../utils/score_api"

export default function Ui() {
    let api = new Score_api()

    return (
        <p>
            { api.test() }
        </p>
    );
}
