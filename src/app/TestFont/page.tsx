import { Rubik, PT_Sans } from "next/font/google";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
});

const ptSans = PT_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const TestFontPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className={`${rubik.className} text-4xl`}>Test Font Page</h1>
            <p className={`${ptSans.className} text-lg text-center`}>
                This is a test page to demonstrate the use of custom fonts in Next.js
            </p>
        </div>
    );
};

export default TestFontPage;
