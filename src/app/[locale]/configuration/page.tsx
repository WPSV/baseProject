import {useTranslations} from 'next-intl';
import ConfigurationLayout from '@/layouts/ConfigurationLayout';

export default function Configuration() {
    const t = useTranslations('NotFoundPage');
    const p = useTranslations('BackPage');
    
    return (
        <ConfigurationLayout>
            
        </ConfigurationLayout>
    );
}