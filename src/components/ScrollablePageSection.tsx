import React, { ReactNode } from "react";

interface ScrollablePageSectionProps {
    children: ReactNode;
}

const ScrollablePageSection: React.FC<ScrollablePageSectionProps> = ({
    children,
}) => {
    return (
        <div className="flex justify-center w-full items-center">
            <div className="flex flex-col items-center min-h-screen w-full max-w-[768px] gap-10 overflow-y-auto pt-32 pb-32 overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default ScrollablePageSection;
