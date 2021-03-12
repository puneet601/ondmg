import React from 'react';

const Display = ({list=[]}) => {
  return (
    <div>
          { list.map((item) => {
              {
                  return (<div><h3>{item.by}</h3>
                      <h5>
                          {item.text}
                      </h5>
                  </div>)
              }
          })}
    
    </div>
  );
}

export default Display