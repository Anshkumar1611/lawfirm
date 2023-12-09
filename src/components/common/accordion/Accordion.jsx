import PropTypes from "prop-types";
import { useState } from "react";
import AccordionButton from "../buttons/Accordion";
const Accordion = ({ data }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex justify-between items-center  text-2xl font-semibold">
        <h2>{data.question}</h2>
        <AccordionButton index={data.index} value={value} setValue={setValue} />
      </div>
      {value === data.index && (
        <p className="text-sm opacity-30 leading-relaxed">{data.answer}</p>
      )}
      <div className="w-full h-0.5 bg-gray "></div>
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.object,
  value: PropTypes.array,
  setValue: PropTypes.func,
};

export default Accordion;
