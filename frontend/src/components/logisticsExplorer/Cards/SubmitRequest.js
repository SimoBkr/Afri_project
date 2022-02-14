import React from 'react';
import './ExplorerSection.css';

function SubmitRequest({setrequest_quote, setform_request}) {

    return (
        <section>
            <div className="box_request_quote">
                <div className="float-left">
                    <img src="/img/still_request_quotes.svg" alt="...not found" className="round-img" style={{ width: "130px" }} />
                </div>
                <div className="text_Still_not_good_fit">
                    <p className="Still_not_good_fit">Still not good fit ?</p>
                    <p className="text_request">Leave a request so that the logistics providers can contact you and provide an individual offer.</p>
                    <button type="button" className="btn btn-primary request_quote" 
                    onClick={() => { setrequest_quote(false); setform_request(true); }} >
                        Request Quote
                        </button>
                </div>
            </div>
        </section >
    )
}

export default SubmitRequest;