import { Heading } from "@/components/heading";
import { Book } from "lucide-react";


const Resume = () => {
    return (
        <div>
            <Heading
                title="Resume Builder"
                description="Our most advanced conversation model."
                icon={Book}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
        </div>
    )
}