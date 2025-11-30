import React from "react";
import { ArrowRight } from "lucide-react";
import RightCardContent from "./RightCardContent";
const RightCard = (props) => {
    console.log(props.tag);
        return (
        <div className="h-full shrink-0 overflow-hidden relative w-80 bg-gray-300 rounded-4xl">
            <img
                className="h-full w-full object-cover"
                src={props.img}
                alt="Right Card Image"
            />
          <RightCardContent id={props.id} tag={props.tag} intro={props.intro} />
        </div>
    );
};

export default RightCard;
