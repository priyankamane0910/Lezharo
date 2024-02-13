import React from 'react';
import './Card.css';

const Card = () => {
  
  return (
    <div>
      <div class="card" >
  <div class="card-body">
  <h2 class="card-title">Data Analysis: Everything You Need to Know</h2>
    <pre className='card-text'>{`Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway.
~ Geoffrey Moore`}</pre>
<pre className='text'>{`
Companies today need every edge and advantage they can get. Thanks to obstacles like rapidly changing markets, economic uncertainty, 
finicky consumer attitudes, and even global pandemics, businesses today are working with slimmer margins for error.

Companies that want to thrive in these competitive markets can improve their odds of success with the help of data analysis.

This strategy is common sense, and it applies to personal life as well as business. No one makes important decisions without first finding out
whats at stake, the pros and cons, and the possible outcomes. Similarly, no company that wants to succeed should make decisions based on 
bad data. Organisations need information; they need data. This is where data analysis enters the picture.

`}

</pre>
<pre className='card-text'>{`What is data analysis?
`}
</pre>

<pre className='text'>
  {` Data analysis is defined as a process of cleaning, transforming, and modelling data to discover useful information for business decision-making. 
The purpose of Data Analysis is to extract useful information from data and take the decision based upon the data analysis.

The information gathered from the data are then presented visually in the form of charts, graphs, or dashboards.

The information discovered can help aid the companys or organisations growth. Decision-makers will be able to come to an actionable 
conclusion and make the right business decisions.

`}
</pre>
<pre className='card-text'>{`Types of Data Analysis:
`}</pre>
<pre className='new-text'>{` Text Analysis`
}</pre>
<pre className='text'>
  {`Text Analysis is also referred to as Data Mining. It is one of the methods of data analysis to discover a pattern in large data sets using databases 
or data mining tools. It used to transform raw data into business information.
`}
</pre>
<pre className='new-text'>{`Descriptive Analysis
`}</pre>
<pre className='text'>{`The descriptive analysis method is the starting point to any analytic reflection, and it aims to answer the question of what happened? It does this
by ordering, manipulating, and interpreting raw data from various sources to turn it into valuable insights for your organisation.
`}</pre>
<pre className='new-text'>{`Exploratory Analysis
`}</pre>
<pre className='text'>{`As its name suggests, the main aim of the exploratory analysis is to explore. Prior to it, there was still no notion of the relationship between 
the data and the variables. Once the data is investigated, the exploratory analysis enables you to find connections and generate hypotheses and 
solutions for specific problems.

`}</pre>
<pre className='new-text'>{`Statistical Analysis`}
</pre>
<pre className='text'>{`
Statistical Analysis shows “What happened?” by using past data in the form of dashboards. Statistical Analysis includes collection, Analysis, 
interpretation, presentation, and modelling of data. It analyses a set of data or a sample of data.

`}</pre>
<pre className='new-text'>{`Predictive Analysis
`}</pre>
<pre className='text'>{`The predictive method allows you to look into the future to answer the question: what will happen? In order to do this, it uses the results of the 
previously mentioned descriptive, exploratory, and diagnostic analysis, in addition to machine learning (ML) and artificial intelligence (AI). Like 
this, you can uncover future trends, potential problems or inefficiencies, connections, and casualties in your data.

`}</pre>
<pre className='new-text'>{`Diagnostic Analysis

`}</pre>
<pre className='text'>{`Diagnostic Analysis shows “Why did it happen?” by finding the cause from the insight found in Statistical Analysis. This Analysis is useful to 
identify behaviour patterns of data. If a new problem arrives in your business process, then you can look into this Analysis to find similar patterns 
of that problem. And it may have chances to use similar prescriptions for the new problems.

`}</pre>
<pre className='new-text'>{`Data Analysis Process
`}</pre>
<pre className='text'>{`The Data Analysis Process is gathering information by using a proper application or tool which allows you to explore the data and find a pattern 
in it.

It has following phases:
`}</pre>
<pre className='new-text'>{` Identify:
`}</pre>
<pre className='text'>{`You first need to identify why you need it in the first place. The identification is the stage in which you establish the questions you will need to 
answer. For example, what is the customer's perception of our brand? Or what type of packaging is more engaging to our potential customers? 
Once the questions are outlined you are ready for the next step.
`}</pre>
<pre className='new-text'>{`Collect:
`}</pre>
<pre className='text'>{`This is the stage where you start collecting the needed data. Here, you define which sources of information you will use and how you will use 
them. The collection of data can come in different forms such as internal or external sources, surveys, interviews, questionnaires, focus groups,
among others.
`}</pre>
<pre className='new-text'>{`Cleaning:
`}</pre>
<pre className='text'>{`Now whatever data is collected may not be useful or irrelevant to your aim of Analysis, hence it should be cleaned. The data which is collected 
may contain duplicate records, white spaces or errors. The data should be cleaned and error free. This phase must be done before Analysis
because based on data cleaning, your output of Analysis will be closer to your expected outcome.
`}</pre><pre className='new-text'>{`Analysis:
`}</pre>
<pre className='text'>{`Once the data is collected, cleaned, and processed, it is ready for Analysis. As you manipulate data, you may find you have the exact 
information you need, or you might need to collect more data. During this phase, you can use data analysis tools and software which will help 
you to understand, interpret, and derive conclusions based on the requirements.
`}</pre><pre className='new-text'>{`Interpretation:
`}</pre>
<pre className='text'>{`After analysing your data, it’s finally time to interpret your results. 
You can choose the way to express or communicate your data analysis either you can use simply in words or maybe a table or chart.
`}</pre>
<pre className='new-text'>{`Visualisation:
`}</pre>
<pre className='text'>{`Data visualisation is very common in your day to day life; they often appear in the form of charts and graphs. In other words, data shown 
graphically so that it will be easier for the human brain to understand and process it.
`}</pre>

  </div>
</div>
    </div>
  );
}

export default Card;
