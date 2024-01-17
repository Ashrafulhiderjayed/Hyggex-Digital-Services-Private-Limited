import './Faq.css'

const Faq = () => {
    return (
        <section className="text-left my-24 w-4/6">
           <h2 className="lg:text-5xl py-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-[hsl(220,90%,23%)] to-[#1F80EB]">FAQ</h2> 
           <div className="gradient-border collapse collapse-arrow my-4">
            <input type="radio" name="my-accordion-2"  /> 
            <div className="collapse-title text-xl font-medium">
                Can education flashcards be used for all age groups?
            </div>
            <div className="collapse-content"> 
            </div>
            </div>
            <div className="gradient-border collapse collapse-arrow my-4">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
                How do education flashcards work?
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
            </div>
            <div className="gradient-border collapse collapse-arrow my-4">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
                Can education flashcards be used for test preparation?
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
                

            </div>
            </div>
        </section>
    );
};

export default Faq;