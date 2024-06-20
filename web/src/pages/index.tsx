import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../helpers/user.helper";
import { getMessages } from "../../helpers/message.helper";


function Main(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    getUser(dispatch);
    getMessages(dispatch);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).spr_messenger}</title>
        <meta name='description' content={setLocale(router.locale).spr_messenger} />
        <meta property='og:title' content={setLocale(router.locale).spr_messenger} />
        <meta property='og:description' content={setLocale(router.locale).spr_messenger} />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
