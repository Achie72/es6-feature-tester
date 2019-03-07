#!/usr/bin/env python

import argparse, os, pytablewriter, re, sys
from subprocess import call

FEATURE_DIR = "features"

CRED = '\033[91m'
CGREEN = '\033[92m'
CBLUE = '\033[94m'
CEND = '\033[0m'
CBOLD = '\33[1m'

FEATURE_NUMBER = 0
FEATURESET_NAMED = 0

def test_feature (file,results,engineList,resultList,featureSet):




    filename = os.path.splitext(os.path.basename(file))[0]
    filename = filename.split("_")
    filename = [fname.capitalize() for fname in filename]
    filename = " ".join(filename)
    subresults = []
    subresults.append(filename)
    for engine in engineList:
        logFile = os.path.basename(os.path.normpath(engine)) + ".log"
        print " >> %s --> %s" % (os.path.basename(os.path.normpath(engine)),file)
        res = open(logFile,"a")
        global FEATURESET_NAMED
        if(FEATURESET_NAMED == 0):
            res.write('\nChecking feature list: %s'  % featureSet)

        sys.stderr = res
        if (call ([engine, file], stderr=res,stdout=res)):
            engineIndex = engineList.index(engine)
            resultList[engineIndex][1] = resultList[engineIndex][1] + 1
            res.write('\n> %s' % file)
            res.write('\n>>  FAIL or Assert failed\n')
            sys.stderr = sys.__stderr__
            sys.stdout = sys.__stdout__
            print '%s%s >>> FAIL %s' % (CBOLD,CRED,CEND)
            subresults.append('<center>:x:')
        else:
            engineIndex = engineList.index(engine)
            resultList[engineIndex][0] = resultList[engineIndex][0] + 1
            res.write('\n> %s' % file)
            res.write('\n>> FAIL  FAIL or Assert failed\n')
            sys.stderr = sys.__stderr__
            sys.stdout = sys.__stdout__
            print '%s%s >>> PASS %s' % (CBOLD,CGREEN,CEND)
            subresults.append('<center>:heavy_check_mark:')
        res.close()
    results.append(subresults)
    FEATURESET_NAMED = 1



def generate_md (feature,results,file,engineList):
    engineNames = []
    engineNames.append("")
    for engine in engineList:
        engineNames.append(os.path.basename(os.path.normpath(engine)))

    writer = pytablewriter.MarkdownTableWriter()
    writer.table_name = feature
    writer.header_list = engineNames
    writer.value_matrix = results
    file.write(writer.dumps())


def main ():
    if (len(sys.argv) < 2):
        print '%s%s\n========================================================%s' % (CBOLD,CRED,CEND)
        print 'No valid path as parameter for usable engine'
        print 'Please specify your engine(s) with full path:'
        print '\n--Example: /home/me/myenginedirectory/build/bin/myengine'
        print '%s%s========================================================%s\n' % (CBOLD,CRED,CEND)

        return

    out = open("FEATURES.md","w")

    # read commandline arguments, first
    fullCmdArguments = sys.argv
    # - further arguments
    engineList = fullCmdArguments[1:]

    #setup list for results
    resultList = []
    for idx in range(len(engineList)):
        resultList.append([0,0])

    for dir in os.listdir(FEATURE_DIR):
        FEATURE_RESULTS = []
        dirname = dir.split("_")
        dirname = [dname.capitalize() for dname in dirname]
        dirname = " ".join(dirname)
        print  '\n%s%sChecking feature list: %s %s' % (CBOLD,CBLUE,dirname,CEND)
        for file in os.listdir(FEATURE_DIR + "/" + dir):
            global FEATURE_NUMBER
            FEATURE_NUMBER = FEATURE_NUMBER + 1
            global FEATURESET_NAMED
            FEATURESET_NAMED = 0
            print '\n%s >%s %s' % (CBOLD,CEND,file)
            file_path = FEATURE_DIR + "/" + dir + "/" + file
            test_feature(file_path,FEATURE_RESULTS,engineList,resultList,dirname)
        generate_md (dirname,FEATURE_RESULTS,out,engineList)
    out.close()

    for engine in engineList:
        engineIndex = engineList.index(engine)
        print '%s%s\n====================%s' % (CBOLD,CBLUE,CEND)
        print '%s%s%s SUMMARY:%s\n' % (CBOLD,CBLUE,os.path.basename(os.path.normpath(engine)).upper(),CEND)
        print '%s%sFEATURES TESTED: %s%s' % (CBOLD,CBLUE,FEATURE_NUMBER,CEND)
        print '%s%sPASS: %s%s' % (CBOLD,CGREEN,resultList[engineIndex][0],CEND)
        print '%s%sFAIL: %s%s' % (CBOLD,CRED,resultList[engineIndex][1],CEND)
        print '%s%s====================%s' % (CBOLD,CBLUE,CEND)


if __name__ == '__main__':
    main()
