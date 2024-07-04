import { ChangeEvent, useTransition } from "react";
import {useRouter, usePathname} from "@/navigation";
import { useParams } from "next/navigation";
import {locales} from "@/config";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const locale = useLocale();

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = event.target.value;
      startTransition(() => {
        router.replace(
          // @ts-ignore
          {pathname, params},
          {locale: nextLocale},
        );
      });
    }

    return (
      <select onChange={handleSelectChange} disabled={isPending} defaultValue={locale}>
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur.toUpperCase()}
          </option>
        ))}
      </select>
    );
};

export default LanguageSwitcher;