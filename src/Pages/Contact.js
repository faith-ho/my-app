const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <h4>This is my contact page</h4>
      <hr></hr>
      <h3>Let's Get In Touch!</h3>
      <form
        action="mailto: faithho.jx@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <label>Your Name:</label>
        <input type="text" name="Name" value="" placeholder="Type here"></input>
        <input type="submit" name="" value="Submit"></input>
        <br></br>
        <label>Your Email:</label>
        <input type="email" name="Email" value=""></input>
        <br></br>
        <br></br>
        <label>Your Message:</label>
        <textarea name="Message" rows="5" cols="10"></textarea>
        <br></br>
        <hr></hr>
        <h4>Here are some other buttons</h4>
        <input type="color" name="" value=""></input>
        <br></br>
        <input type="checkbox" name="" value=""></input>
        <br></br>
        <label>Password: </label>
        <input type="password" name="" value=""></input>
        <br></br>
        <input type="file" name="" value=""></input>
      </form>
    </div>
  );
};

export default Contact;
