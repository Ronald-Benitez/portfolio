import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languageOptions = [
    { "language": "English", "code": "en" },
    { "language": "Español", "code": "es" }
]

const LanguageSelector = () => {
    const [language, setLanguage] = useState('');
    const { i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        setLanguage(lng);
    }, []);

    useEffect(() => {
        if (language) {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);



    return (
        <div>
            <select onChange={(e) => setLanguage(e.target.value)} className='p-2 bg-zinc-100 hover:bg-zinc-200 rounded' value={language}>
                {languageOptions.map((opt, i) => (
                    <option key={i} value={opt.code}>{opt.language} ({opt.code})</option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
