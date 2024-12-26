

function Contact() {
    return (
        <div className="all-pages">
          <div className="all-pages-conten">
            <h1 className="pages-headings">
              Get in Touch with Us
            </h1>
            
            <div className="form-main-div1">
              <div className="form-main-div2">
                <form>
                  <div className="form-content">
                    <label className=".label-text" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      
                      className="text-area"
                      placeholder="Your full name"
                      required
                    />
                  </div>
    
                  <div className="form-content">
                    <label className=".label-text" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                     
                      className="text-area"
                      placeholder="Your email address"
                      required
                    />
                  </div>
    
                  <div className="form-content">
                    <label className=".label-text" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                     
                      className="text-area"
                      placeholder="Write your message here"
                      
                      required
                    />
                  </div>
    
                  <button
                    type="submit"
                    className="text-area"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }


export default Contact