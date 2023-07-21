import React from 'react';
import classes from './FAQ.module.css';
import QuestionCard from './QuestionCard';

const FAQ = () => {

  const questionDetails = [
    {
      question:'Is thre a free trial available?',
      answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question:'Can I change my plan later?',
      answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question:'Is thre a free trial available?',
      answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question:'Is thre a free trial available?',
      answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question:'Is thre a free trial available?',
      answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    }

  ];
  return (
    <div id = "faq-section" className={classes.faq_main} >
      <h3> FAQ </h3>
      <h1>Answers to your doubts</h1>
      <p>Everything you need to know about robolawyer and our service</p>
      <section className={classes.sectionS}>
        <QuestionCard  className = {classes.card_style}   details = {questionDetails[0]}  />
        <QuestionCard  className = {classes.card_style}  details = {questionDetails[1]}  />
        <QuestionCard  className = {classes.card_style}   details = {questionDetails[2]} />
        <QuestionCard  className = {classes.card_style}  details = {questionDetails[3]}  />
        <QuestionCard  className = {classes.card_style}  details = {questionDetails[4]}  />
      </section>
    </div>
  )
};


export default FAQ
