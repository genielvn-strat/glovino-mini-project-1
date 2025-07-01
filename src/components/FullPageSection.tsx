import React, { ReactNode } from "react";

interface FullPageSectionProps {
    children: ReactNode;
}

const FullPageSection: React.FC<FullPageSectionProps> = ({ children }) => {
    return (
        <div className="relative flex items-center justify-center flex-col min-h-full min-w-full gap-3 h-full overflow-hidden">
            {children}
        </div>
    );
};

export default FullPageSection;
