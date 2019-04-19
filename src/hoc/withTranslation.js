import React from "react"
import {TranslationConsumer} from "../components/translation-context"

const withTranslation = Wrapped => props => {
    return (
        <TranslationConsumer>
            {translation => <Wrapped {...props} t={translation}/>}
        </TranslationConsumer>
    )
};

export default withTranslation
