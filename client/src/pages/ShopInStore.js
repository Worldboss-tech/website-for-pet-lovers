import React from 'react';
import Background from '../components/Background';
import CategoryCard from '../components/CategoryCard';
import websiteData from "../utils/SiteData"
import "./style.css"

export default function ShopInStore() {
    // Shortened for ease of use
    const dataset = websiteData.petCategories

    return (
        <main className="hide-overflow">
            <Background />
            <div className="row categories">
                {dataset.map((data) => (
                    <div className="col-md-4 shop-card" key={data.id}>
                    <CategoryCard
                        src={data.link}
                        alt={data.category}
                        // category={data.category}
                    />
                    </div>
                ))}
            </div>
        </main>
    )
}
