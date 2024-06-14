import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <select
            onChange={handleChange}
            defaultValue={i18n.language}
        >
            <option value="en">English</option>
            <option value="pt">Português</option>
            <option value="es">Español</option>
        </select>
    );
};

export default LanguageSwitcher;