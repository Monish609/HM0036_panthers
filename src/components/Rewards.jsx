import React from "react";

const Rewards = () => {
    const rewards = [
        { id: 1, name: "Certificate of Completion", cost: 100 },
        { id: 2, name: "Exclusive Badge", cost: 50 },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Rewards</h1>
            <div className="space-y-4">
                {rewards.map((reward) => (
                    <div
                        key={reward.id}
                        className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
                    >
                        <p className="text-lg font-medium text-gray-700">{reward.name}</p>
                        <p className="text-sm text-gray-500">{reward.cost} credits</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rewards;