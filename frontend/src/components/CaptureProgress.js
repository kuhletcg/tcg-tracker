import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Label, Input, Form, FormGroup } from "reactstrap";
import { useHistory } from "react-router-dom";

const CaptureProgress = () => {
  const [currentDate, setNewDate] = useState(null);
  const [errors, setErrors] = useState(null);
  //   const handleChange = (event, data) => setNewDate(data.value);

  const [formData, setFormData] = useState({
    freeCodeCamp: "",
    blogPost: "",
    typingAccuracy: "",
    typingWpm: "",
    codeWar: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.freeCodeCamp && formData.blogPost) {
      //   dispatch(add(formData));
      setFormData({
        freeCodeCamp: "",
        blogPost: "",
        typingAccuracy: "",
        typingWpm: "",
        codeWar: "",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="tracker-form">
      <FormGroup>
        <Label>Free Code Camp</Label>
        <Input
          value={formData.freeCodeCamp}
          onChange={(e) => handleChange(e)}
          name="freeCodeCamp"
          placeholder="Free Code Camp"
        />
      </FormGroup>
      <FormGroup>
        <Label>Blog Post Link</Label>
        <Input
          value={formData.blogPost}
          name="blogPost"
          onChange={(e) => handleChange(e)}
          placeholder="blog post link"
        />
      </FormGroup>
      <FormGroup>
        <Label>Typing Accuracy</Label>
        <Input
          type="number"
          value={formData.typingAccuracy}
          onChange={(e) => handleChange(e)}
          name="typingAccuracy"
          placeholder="Typing Accuracy"
        />
      </FormGroup>
      <FormGroup>
        <Label>Typing Wpm</Label>
        <Input
          type="number"
          value={formData.typingWpm}
          onChange={(e) => handleChange(e)}
          name="typingWpm"
          placeholder="Typing Wpm"
        />
      </FormGroup>
      <FormGroup>
        <Label>Code War</Label>
        <Input
          type="number"
          value={formData.codeWar}
          onChange={(e) => handleChange(e)}
          name="codeWar"
          placeholder="Code War"
        />
      </FormGroup>
      <div style={{ width: "20rem" }}></div>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CaptureProgress;
