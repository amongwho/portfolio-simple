import styles from "./ProjectShowcase.module.css";

const ShowcaseCard = ({
  imageUrl,
  imageAlt,
  eyebrow,
  title,
  description,
  features = [],
  reverse = false,
  labelClassName,
}) => {
  const cardClasses =
    `${styles.showcaseCard} ${reverse ? styles.showcaseCardReverse : ""}`.trim();
  const labelClasses =
    `${styles.eyebrowLabel} ${labelClassName ? styles[labelClassName] : ""}`.trim();

  const contentBlock = (
    <div className={styles.content}>
      <div className={labelClasses}>{eyebrow}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {features.length > 0 && (
        <ul className={styles.featureList}>
          {features.map((feature) => (
            <li key={feature} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageBlock = (
    <div className={styles.imageContainer}>
      <img
        className={styles.showcaseImage}
        src={imageUrl}
        alt={imageAlt}
        loading="lazy"
      />
    </div>
  );

  return (
    <div className={cardClasses}>
      <div className={styles.showcaseGrid}>
        {reverse ? contentBlock : imageBlock}
        {reverse ? imageBlock : contentBlock}
      </div>
    </div>
  );
};

export const ProjectShowcaseLeft = (props) => <ShowcaseCard {...props} />;

export const ProjectShowcaseRight = ({
  imageUrl,
  imageAlt,
  eyebrow,
  title,
  description,
  features,
  buttonText,
}) => (
  <ShowcaseCard
    imageUrl={imageUrl}
    imageAlt={imageAlt}
    eyebrow={eyebrow}
    title={title}
    description={description}
    features={features}
    buttonText={buttonText}
    reverse
    buttonVariant="coral"
    labelClassName="labelCoral"
  />
);
