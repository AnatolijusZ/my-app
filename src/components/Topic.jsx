import React from "react";
import { 
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Topic() {
    
    const { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }