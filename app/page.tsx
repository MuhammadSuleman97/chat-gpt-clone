import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (

    <div className="text-white flex flex-col items-center h-screen justify-center px-2">
      <div className="text-5xl font-bold mb-20">ChatGPT</div>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText"> Explain Something to me </p>
            <p className="infoText">What is the difference between dogs and cats?</p>
            <p className="infoText">What is the color of Sun?</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText"> Change the GPT to use</p>
            <p className="infoText">Messages are stored in firebase firestore</p>
            <p className="infoText">Hot Toast notitcation when GPT is thinking</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText"> May occationally generate wrong information</p>
            <p className="infoText">May Occationally produce harmful/biased content</p>
            <p className="infoText">Limited knowledge of world after 2023</p>
          </div>
        </div>

      </div>
    </div>

    
  );
}
