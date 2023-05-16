import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ time,work1,work2,work3,techStackUsed, position, company, companyLink }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <span> <div  style={{display: "inline-block",color:"#fafafa",fontSize:"1.3em"}} className=" font-semibold"> {position} </div> </span>  
    <span ><div  style={{display: "inline-block",color:"#fafafa"}} className="my-0.5 text-lg"><a href={companyLink} target="_blank" rel="noreferrer">
       - {company}
      </a> </div></span>
    <div  style={{fontSize:"1.2em"}} className=" font-semibold">{time}</div>
      <div style={{fontSize:"1.1em"}} className="mb-4">
      <h3 >{work1}</h3>
      <h3 >{work2}</h3>
      <h3 style={{display: "inline-block"}}>{work3}</h3>
      <h3 style={{display: "inline-block",color:"#c7c7c7"}} className=" font-semibold">{techStackUsed}</h3>
      </div>
   
  </li>
);

const Experience = ({ experiences, loading }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          position={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };
  return (
    <>
      {experiences?.length !== 0 && (
        <div className="card shadow-lg bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h1 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span  style={{fontSize:"1.5em",color:"white"}} >
                    Experience
                  </span>
                )}
              </h1>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {experiences.map((experience, index) => (
                      <ListItem
                        key={index}
                        work1={experience.work1}
                        work2={experience.work2}
                        work3={experience.work3}
                        techStackUsed={experience.techStackUsed}
                        time={`${experience.from} - ${experience.to}`}
                        position={experience.position}
                        company={experience.company}
                        companyLink={
                          experience.companyLink ? experience.companyLink : null
                        }
                      />
                    ))}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ListItem.propTypes = {
  time: PropTypes.node,
  work1: PropTypes.node,
  work2: PropTypes.node,
  work3: PropTypes.node,
  techStackUsed: PropTypes.node,
  position: PropTypes.node,
  company: PropTypes.node,
  companyLink: PropTypes.string,
};

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Experience;
