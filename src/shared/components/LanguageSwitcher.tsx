import { useTranslation } from 'next-i18next';
import {Globe} from "@phosphor-icons/react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleChange = (key: string) => {
        console.log(key);
        i18n.changeLanguage(key);
    }

    return (
        <Dropdown
            placement="bottom-end"
            showArrow
            classNames={{
                base: [
                    "before:bg-primary bg-transparent"
                ],
                content: [
                    "border border-solid border-primary rounded"
                ]
            }}
        >
            <DropdownTrigger>
                <Globe size={32} weight="bold" color="#FFF" />
            </DropdownTrigger>
            <DropdownMenu
                onAction={(key) => handleChange(key.toString())}
            >
                <DropdownItem className="text-center" key="en">English</DropdownItem>
                <DropdownItem className="text-center" key="pt">Português</DropdownItem>
                <DropdownItem className="text-center" key="es">Español</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default LanguageSwitcher;