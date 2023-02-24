import clsx from 'clsx';
import styles from './Experience.module.scss';
import ResumeEduItem from './ResumeEduItem';
function Experience() {
  return (
    <div className={clsx('experience', styles.experience)}>
      <hr className={clsx('separator', styles.separator)}></hr>
      <h1 className={clsx('Heading', styles.Heading)}>Education & Experience</h1>
      <div className={clsx('resume', styles.resume)}>
        <div className="row">
          <div className="col-12 col-lg-6">
            <ResumeEduItem timer={'2018 - 2021'} title={'Hòa Hội'} subtitle={'HIGH SCHOOL'} />
          </div>
          <div className="col-12 col-lg-6">
            <ResumeEduItem timer={'2021 - NOW'} title={'TÔN ĐỨC THẮNG'} subtitle={'UNIVERSITY'} />
          </div>
          <div className="col-12 col-lg-6">
            <ResumeEduItem timer={'2021'} title={'JOIN ICON CLUB'} subtitle={'CLUB'} />
          </div>
          <div className="col-12 col-lg-6">
            <ResumeEduItem timer={'2022'} title={'MENTOR'} subtitle={'CLUB'} />
          </div>
          <div className="col-12 col-lg-6">
            <ResumeEduItem timer={'2021'} title={'FIRST REACTJS PROJECT'} subtitle={'PROJECT'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
