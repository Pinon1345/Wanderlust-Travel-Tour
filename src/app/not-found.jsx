import React from 'react';
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-50 via-white to-indigo-50 px-6 pt-4 pb-10 rounded-t-2xl">
            <div className="max-w-3xl mx-auto text-center">

                {/* Illustration */}
                <div className="mb-8">
                    <h1 className="text-8xl md:text-9xl font-extrabold bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent pb-5">
                        404
                    </h1>

                    <div className="text-6xl md:text-8xl mt-4 animate-bounce">
                        ✈️
                    </div>
                </div>

                {/* Content */}
                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                    Oops! You have Lost Your Way
                </h2>

                <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    The destination you are looking for seems to have drifted off the map.
                    Lets get you back to exploring amazing places around the world.
                </p>

                {/* Decorative Card */}
                <div className="mt-10 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-100">
                    <p className="text-slate-700 text-lg">
                        🌍 Discover breathtaking destinations, unforgettable experiences,
                        and your next dream adventure with Wanderlust.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/destinations"
                        className="px-6 py-3 rounded-xl font-semibold border border-slate-300 text-slate-700 hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
                    >
                        Explore Destinations
                    </Link>
                </div>

                {/* Footer Text */}
                <p className="mt-12 text-sm text-slate-500">
                    Wanderlust Travel Tour • Explore Beyond Boundaries
                </p>
            </div>
        </section>

    );
};

export default NotFoundPage;