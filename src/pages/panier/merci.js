import React from 'react';
import Format from "@/layout/Format";
import {useRouter} from "next/router";

const PanierMerci = () => {

    const router = useRouter();
    const query = router.query;

    return (
        <Format>
            <div className={'grid lg:grid-cols-[2fr_1fr] lg:gap-12 gap-6 mt-28 mb-6 '}>
                <div>Merci pour votre commande <b>#{query?.id}</b></div>
            </div>
        </Format>
    );
};

export default PanierMerci;
