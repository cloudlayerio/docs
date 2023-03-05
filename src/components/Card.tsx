import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

interface CardProps {
  name: string;
  image: string;
  url: string;
  description: string;
}

export function Card({ name, image, url, description }: CardProps) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx("card")}>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
             View Tutorial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
