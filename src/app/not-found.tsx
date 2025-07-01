import FullPageSection from "@/components/FullPageSection";

export default function NotFound() {
    return (
        <FullPageSection>
            <h1>404!</h1>
            <p className="text-center text-lg">
                Sorry, your requested page could not be found.
            </p>
        </FullPageSection>
    );
}
