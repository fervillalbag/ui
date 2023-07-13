import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Calendar from "./components/Calendar";
import { Button } from "./ui";
import Modal from "./components/Modal";

function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="px-4 py-5 flex flex-col gap-y-10">
      <div>
        <h3 className="font-medium mb-4 text-2xl">Calendar</h3>
        <Calendar />
      </div>

      <div className="max-w-sm">
        <h3 className="font-medium mb-4 text-2xl">Buttons</h3>
        <div className="flex flex-col gap-y-3">
          <Button>Button Primary</Button>
          <Button>Button Secondary</Button>
        </div>
      </div>

      <div className="max-w-sm">
        <h3 className="font-medium mb-4 text-2xl">Modal</h3>
        <div className="flex flex-col gap-y-3">
          <Button onClick={() => setShow(true)}>Open Modal</Button>
          <AnimatePresence>
            {show && (
              <Modal show={show} setShow={setShow}>
                {/* body */}
              </Modal>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
