"use client";

import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-screen bg-linear-to-br from-white via-cyan-50 to-blue-50 flex items-center justify-center px-5 py-12">
            <div className="w-full max-w-2xl rounded-3xl border border-cyan-100 bg-white shadow-xl p-8 sm:p-10 text-center">

                {/* Error Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-r from-cyan-600 to-purple-600 shadow-lg">
                    <AlertTriangle className="h-12 w-12 text-white" />
                </div>

                {/* Heading */}
                <h1 className="mt-8 text-3xl sm:text-4xl font-extrabold text-gray-900">
                    Oops! Something went wrong
                </h1>

                {/* Description */}
                <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7 max-w-lg mx-auto">
                    We could not complete your request right now. Please try again.
                    If the problem continues, refresh the page or return to the home page.
                </p>

                {/* Optional Error Message (Development Only) */}
                {process.env.NODE_ENV === "development" && (
                    <div className="mt-6 rounded-xl bg-red-50 border border-red-100 p-4 text-left overflow-auto">
                        <p className="text-xs font-semibold text-red-600 mb-2">
                            Development Error:
                        </p>
                        <code className="text-xs text-red-500 break-all">
                            {error?.message}
                        </code>
                    </div>
                )}

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                    <button
                        onClick={() => reset()}
                        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 rounded-xl border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
                    >
                        <Home className="w-5 h-5" />
                        Back Home
                    </Link>

                </div>

                {/* Footer */}
                <div className="mt-10 border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-500">
                        Wanderlust Travel Tour • Explore the world with confidence 🌍
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;