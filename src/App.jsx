import { CORE_CONCEPTS } from './data.js';
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
function App() {
    function handleSelect(element) {
        console.log(element);
    }

    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />

                        <CoreConcept {...CORE_CONCEPTS[1]} />

                        <CoreConcept {...CORE_CONCEPTS[2]} />

                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('component')}>Component</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    <div className="tab-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            voluptates, voluptatum, quod, quae dolorum officia voluptatem
                            accusantium quia voluptas quibusdam magnam. Quisquam, quibusdam
                            voluptatem. Quisquam, quibusdam voluptatem.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
