import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ time,note, degree, institution }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div style={{fontSize:"1.3em",color:"#fafafa"}} className=" font-semibold">{institution}</div>
    <h3 style={{fontSize:"1.2em"}} className="my-1 font-semibold">{degree}</h3>
    <div style={{fontSize:"1.2em"}} className="my-1 text-xs">{time}</div>
    <div style={{fontSize:"1.2em"}} className="mb-4  text-xs">{note}</div>
  </li>
);

const Education = ({ loading, education }) => {
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
          degree={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {education?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span style={{fontSize:"1.3em"}} className="text-base-content opacity-100">
                    Education
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {education.map((item, index) => (
                      <ListItem
                        key={index}
                        time={`${item.from == '' ? '' : ' -'} ${item.to}`}
                        degree={item.degree}
                        note={item.note}
                        institution={item.institution}
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

Education.propTypes = {
  loading: PropTypes.bool.isRequired,
  education: PropTypes.array.isRequired,
};

ListItem.propTypes = {
  time: PropTypes.node,
  note: PropTypes.node,
  degree: PropTypes.node,
  institution: PropTypes.node,
};

export default Education;
