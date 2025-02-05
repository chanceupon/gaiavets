import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Custom404 from './404';
import { PAGE_ROUTES } from '@/utils/routes';

const DynamicRedirect = () => {
  const router = useRouter();
  const { slug } = router.query as any;
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const redirectMap = {
      'contact-us': `${PAGE_ROUTES.HOME}#location`,
      'vet-clinic-serangoon-road':
        '/locations?slug=vet-clinic-serangoon-road#1',
      'vet-clinic-holland-road': '/locations?slug=vet-clinic-holland-road#2',
    };

    const redirectTo = redirectMap[slug];

    if (redirectTo) {
      router.replace(redirectTo);
    } else {
      setIsNotFound(true);
    }
  }, [slug]);

  if (isNotFound) {
    return (
      <>
        <Custom404 />
      </>
    );
  }
  return null;
};

export default DynamicRedirect;
