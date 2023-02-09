import Format from "@/layout/Format";
import ProductRecommandation, {Product} from "@/components/ProductRecommandation";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {apiBackend} from "../../lib/helper";

export default function Search() {

    const router = useRouter();
    const query = router.query;

    const [data, setData] = useState([]);

    useEffect(() => {
        if (query['q']) {
            searchData();
        }
    }, [query]);

    const searchData = async () => {
        const d = await axios.get(apiBackend + '/product/search?q=' + query['q']);
        setData(d.data);
    }

    return (
        <>
            <Format>
                <div className={'pt-32'}>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-12 ">
                        {
                            data.map((value, index) => (
                                <Product key={index} data={value}/>
                            ))
                        }
                    </div>
                </div>
            </Format>
        </>
    )
}
